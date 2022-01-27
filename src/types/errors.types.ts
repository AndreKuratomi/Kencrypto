export default interface Error {
  status: Status;
}

interface Status {
  timestamp: string;
  error_code: number;
  error_message: string;
  elapsed: number;
  credit_count: number;
}

export function isError404(error: any): error is Error {
  return (error as Error).status !== undefined;
}
