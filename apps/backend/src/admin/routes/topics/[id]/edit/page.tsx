import { useNavigate, useParams } from "react-router-dom";
import { RouteDrawer } from "../../../../components/route-drawer/RouteDrawer";
import { useTopic } from "../../../../hooks/api/topic";
import TopicDetailPage from "../topic-detail-page";
import { TopicEditForm } from "./topic-edit-form";

const SellerEditPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoading } = useTopic(params.id!);

  if (isLoading) {
    return <div>Loading...</div>;
  }
    
  return (
    <>
      <TopicDetailPage />
      <RouteDrawer 
        header="Edit seller" 
        onClose={(open: boolean) => !open && navigate(-1)}
      >
        <TopicEditForm topic={data.topic} />
      </RouteDrawer>
    </>
  );
};

export default SellerEditPage;