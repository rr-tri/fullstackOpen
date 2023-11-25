import React from "react";
import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../../components/RepositoryList/index"; // Replace with correct import path
import { convertToK } from "../../../components/RepositoryList/RepositoryItem";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId, getByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      // Ensure all repository items are present
      const repositoryItems = getAllByTestId("repositoryItem");
      expect(repositoryItems).toHaveLength(repositories.edges.length);

      // Test each repository item's content

      repositories.edges.forEach(({ node }, index) => {
        expect(getAllByTestId("repositoryName")[index]).toHaveTextContent(
          node.fullName
        );
        expect(
          getAllByTestId("repositoryDescription")[index]
        ).toHaveTextContent(node.description);
        expect(getAllByTestId("repositoryLanguage")[index]).toHaveTextContent(
          node.language
        );
        expect(getAllByTestId("repositoryStarGazers")[index]).toHaveTextContent(
          `${convertToK(node.stargazersCount)}`
        );
        expect(getAllByTestId("repositoryForksCount")[index]).toHaveTextContent(
          `${convertToK(node.forksCount)}`
        );
        expect(
          getAllByTestId("repositoryReviewCount")[index]
        ).toHaveTextContent(`${convertToK(node.reviewCount)}`);
        expect(
          getAllByTestId("repositoryRatingAverage")[index]
        ).toHaveTextContent(`${convertToK(node.ratingAverage)}`);
      });
    });
  });
});
