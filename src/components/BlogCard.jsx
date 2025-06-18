import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export const BlogCard = ({ image, title, description, link }) => {
  return (
    <Card className="w-80 flex flex-col justify-between transition-transform hover:-translate-y-2 hover:shadow-xl duration-300 p-0">
      
      <div>
        <CardHeader className="p-0">
          <div className="overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={title}
              className="object-cover h-50 w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              {description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <p className="text-sm text-gray-700">
            Read this amazing blog post and learn more.
          </p>
        </CardContent>
      </div>

      <CardFooter className="justify-center p-4 mt-auto">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button className="bg-pink-500 hover:bg-pink-600 transition-colors">
            Read More
          </Button>
        </a>
      </CardFooter>

    </Card>
  );
};
