import { gql } from "@apollo/client";

export const GET_TOP_ANIMES = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(sort: POPULARITY_DESC) {
        id
        genres
        title {
          romaji
          english
          native
        }
        coverImage {
          large
          medium
        }
      }
    }
  }
`;

export const GET_ANIME_BY_ID = gql`
  query ($id: Int) {
    Media(id: $id, sort: ID) {
      id
      title {
        romaji
        english
        native
      }
      type
      genres
      episodes
      averageScore
      duration
      popularity
      status
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      description
      coverImage {
        extraLarge
        large
        medium
      }
    }
  }
`;
