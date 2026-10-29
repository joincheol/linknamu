import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

// 개발 모드의 HMR에서도 연결을 하나만 유지하도록 전역에 캐시
export function getMongoClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
  }
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

export async function getClicksCollection() {
  const client = await getMongoClient();
  const dbName = process.env.MONGODB_DB ?? "linknamu";
  return client.db(dbName).collection<{ _id: string; count: number }>("clicks");
}
