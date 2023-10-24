import {
  NotionRenderer,
  Equation,
  Code,
  Collection,
  CollectionRow,
} from "react-notion-x";
import CommentBox from "@containers/PostDetail/components/CommentBox";
import Footer from "./components/PostFooter";
import PostHeader from "./components/PostHeader";
import { TPost } from "@/src/types";

const mapPageUrl = (id: string) => {
  return "https://www.notion.so/" + id.replace(/-/g, "");
};

type Props = {
  blockMap: any;
  data: TPost;
};

const PostDetail: React.FC<Props> = ({ blockMap, data }) => {
  return (
    <article className="m-auto max-w-2xl">
      <PostHeader data={data} />
      <NotionRenderer
        recordMap={blockMap}
        components={{
          equation: Equation,
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
        }}
        mapPageUrl={mapPageUrl}
      />

      <>
        <Footer />
        <CommentBox data={data} />
      </>
    </article>
  );
};

export default PostDetail;
