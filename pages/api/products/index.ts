import type { NextApiHandler } from "next";
import { prisma } from "@/lib/db";
import type { Prisma } from "@prisma/client";
import type { ProductWithRelations } from "@/prisma/types";

const handler: NextApiHandler = async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET": {
      const products = await prisma.product.findMany({
        include: {
          categories: {
            select: {
              name: true,
            },
          },
          images: true,
          tags: {
            select: {
              name: true,
            },
          },
          variants: true,
        },
      });
      return res.status(200).json(products);
    }
    case "POST": {
      try {
        const { images, categories, variants, tags, ...rest } =
          body as ProductWithRelations;

        // Create product with images and variants
        const createInput: Prisma.ProductCreateInput = {
          images: {
            createMany: {
              data: images,
              skipDuplicates: true,
            },
          },
          variants: {
            create: variants ?? undefined,
          },
          ...rest,
        };

        // Create product with input
        const product = await prisma.product.create({ data: createInput });

        // Create update input for categories and tags
        await prisma.product.update({
          where: {
            id: product.id,
          },
          data: {
            categories: {
              // Set ids for existing categories
              set: categories.filter((category) => category.id),
              // Create new categories
              createMany: {
                data: categories.filter((category) => category.name),
              },
            },
            tags: {
              set: tags.filter((category) => category.id),
              createMany: {
                data: tags.filter((category) => category.name),
              },
            },
          },
        });

        return res.status(201).json("Product successfully created");
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Product input failed", error });
      }
    }
    default:
      return res
        .status(405)
        .json({ success: false, message: "Method not allowed" });
  }
};

export default handler;
