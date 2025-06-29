import { useParams } from "react-router-dom";
import { useTopic } from "../../../hooks/api/topic";
import { TopicGeneralSection } from "./components/TopicGeneralSection";


const TopicDetailPage = () => {
  const { id } = useParams();


  const { data, isLoading } = useTopic(id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopicGeneralSection topic={data.topic} />
    </>
  );
};

export default TopicDetailPage;
