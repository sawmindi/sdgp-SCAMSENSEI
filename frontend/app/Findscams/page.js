import React from "react";
import MyDropdown from "@/app/Findscams/MyDropdown";
import Navbar from "@/app/components/Navbar";
import MapButton from "./CurrentLocation";

function FindScams() {
  return (
    <>
      <div
        className={
          "flex flex-col justify-center items-center mt-[1%] min-h-screen"
        }
      >
        <div className={"mt-[10%] text-center text-amber-50"}>
          <h1 className={"text-6xl mb-10  animate-fade-in"}>
            Community Stories
          </h1>
          <p className={"text-3xl"}>Scams That the Community Faced</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className={"sm:mt-[10%] sm:pb-[20%] sm:w-auto button-container"}>
            <MyDropdown />
          </div>

          <div className={"sm:mt-[10%] sm:pb-[20%] sm:w-auto button-container"}>
            <MapButton />
          </div>
        </div>

        <div>
          <p>
            Knowing how to write a paragraph is incredibly important. It’s a
            basic aspect of writing, and it is something that everyone should
            know how to do. There is a specific structure that you have to
            follow when you’re writing a paragraph. This structure helps make it
            easier for the reader to understand what is going on. Through
            writing good paragraphs, a person can communicate a lot better
            through their writing. When you want to write a paragraph, most of
            the time you should start off by coming up with an idea. After you
            have your idea or topic, you can start thinking about different
            things you can do to expand upon that idea. You should only finish
            the paragraph when you’ve finished covering everything you want
            about that idea. There are a few helpful tips and tricks you can
            learn to help you write a paragraph. The examples below are a great
            way for you to see how a paragraph is written and the structure that
            they follow. You can also take courses to teach you how to write
            proper paragraphs. The Udemy course, Quality Paragraph and Essay
            Writing, does just as the name suggests and it teaches you how to
            writing a great paragraph for your essays.
          </p>
        </div>
        <div>
          <p>
            Knowing how to write a paragraph is incredibly important. It’s a
            basic aspect of writing, and it is something that everyone should
            know how to do. There is a specific structure that you have to
            follow when you’re writing a paragraph. This structure helps make it
            easier for the reader to understand what is going on. Through
            writing good paragraphs, a person can communicate a lot better
            through their writing. When you want to write a paragraph, most of
            the time you should start off by coming up with an idea. After you
            have your idea or topic, you can start thinking about different
            things you can do to expand upon that idea. You should only finish
            the paragraph when you’ve finished covering everything you want
            about that idea. There are a few helpful tips and tricks you can
            learn to help you write a paragraph. The examples below are a great
            way for you to see how a paragraph is written and the structure that
            they follow. You can also take courses to teach you how to write
            proper paragraphs. The Udemy course, Quality Paragraph and Essay
            Writing, does just as the name suggests and it teaches you how to
            writing a great paragraph for your essays.
          </p>
        </div>
        <div>
          <p>
            {" "}
            Knowing how to write a paragraph is incredibly important. It’s a
            basic aspect of writing, and it is something that everyone should
            know how to do. There is a specific structure that you have to
            follow when you’re writing a paragraph. This structure helps make it
            easier for the reader to understand what is going on. Through
            writing good paragraphs, a person can communicate a lot better
            through their writing. When you want to write a paragraph, most of
            the time you should start off by coming up with an idea. After you
            have your idea or topic, you can start thinking about different
            things you can do to expand upon that idea. You should only finish
            the paragraph when you’ve finished covering everything you want
            about that idea. There are a few helpful tips and tricks you can
            learn to help you write a paragraph. The examples below are a great
            way for you to see how a paragraph is written and the structure that
            they follow. You can also take courses to teach you how to write
            proper paragraphs. The Udemy course, Quality Paragraph and Essay
            Writing, does just as the name suggests and it teaches you how to
            writing a great paragraph for your essays.
          </p>
        </div>
      </div>
    </>
  );
}

export default FindScams;
