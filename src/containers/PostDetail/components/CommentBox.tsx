import { TPost } from "@/src/types";
import CONFIG from "morethan-log.config";
import dynamic from "next/dynamic";

import UtterancesComponent from "@components/Utterances";

type Props = {
  data: TPost;
};

const CommentBox: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <UtterancesComponent issueTerm={data.id} />
    </div>
  );
};

export default CommentBox;
