declare module '@/lib/notion' {
  export type NotionPost = {
    id: string;
    title: string;
    date: string;
    description: string;
    cover: string | null;
    slug: string;
  }

  export function getNotionData(): Promise<NotionPost[]>;
  export function getPageContent(pageId: string): Promise<unknown>;
} 