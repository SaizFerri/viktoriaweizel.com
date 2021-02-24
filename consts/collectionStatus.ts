const TEST_STATUS = process.env.NEXT_PUBLIC_DIRECTUS_COLLECTION_TEST_STATUS;

const COLLECTION_STATUS = TEST_STATUS
  ? ["published", TEST_STATUS]
  : ["published"];

export default COLLECTION_STATUS;
