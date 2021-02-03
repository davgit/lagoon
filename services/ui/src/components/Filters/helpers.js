import gql from "graphql-tag";

export const getProjectOptions = gql`
  query getProjectOptions {
    allProjects {
      id
      name
      environments {
        id
        name
      }
    }
  }
`;

export const getSourceOptions = gql`
  query getProblemSources {
    sources: problemSources
  }
`;

export const getServiceOptions = gql`
  query getProblemServices($environment: Int) {
    services: problemServices(environment: $environment)
  }
`;

const getSeverityEnumQuery = gql`
  query severityEnum {
    __type(name: "ProblemSeverityRating") {
      name
      enumValues {
        name
      }
    }
  }
`;

export default getSeverityEnumQuery;
