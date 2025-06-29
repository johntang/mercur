import { PencilSquare, Trash } from "@medusajs/icons";
import { Container, Heading, toast } from "@medusajs/ui";
import { useNavigate } from "react-router-dom";
import { ActionsButton } from "../../../../common/ActionsButton";
import { SellerStatusBadge } from "../../../../components/seller-status-badge/SellerStatusBagde";
import { useDeleteTopic } from "../../../../hooks/api/topic";

export const TopicGeneralSection = ({ topic }: { topic: any }) => {

  const navigate = useNavigate();

  const {mutateAsync: deleteTopic} = useDeleteTopic()


  const deleteOnClick = async()=> {
    try{
      await deleteTopic({id: topic.id})
      navigate('/topics')
      toast.success("Deleted!");
    }
    catch {
      toast.success("Error!");
    }
  }

  return (
    <>
      <div>
        <Container className="mb-2">
          <div className="flex items-center justify-between">
            <Heading>{topic.name}</Heading>
            <div className="flex items-center gap-2">
              <SellerStatusBadge status={topic.store_status || 'pending'} />
              <ActionsButton
                actions={[
                  {
                    label: "Edit",
                    onClick: () => navigate(`/topics/${topic.id}/edit`),
                    icon: <PencilSquare />
                  },
  
                  {
                    label: "Delete",
                    onClick: deleteOnClick,
                    icon: <Trash />
                  },
  

                ]}
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="flex gap-4">
        <Container className="px-0">
          <div className="flex items-center justify-between px-8 py-4">
            <div>
              <Heading>Store</Heading>
            </div>
          </div>
          {/* <div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Name</Text>
              <Text className="w-1/2">{seller.name}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Email</Text>
              <Text className="w-1/2">{seller.email}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Phone</Text>
              <Text className="w-1/2">{seller.phone}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Description</Text>
              <Text className="w-1/2">{seller.description}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Handle</Text>
              <Text className="w-1/2">{seller.handle}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Instagram</Text>
              <Text className="w-1/2">{seller.ig}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Facebook</Text>
              <Text className="w-1/2">{seller.facebook}</Text>
            </div>
            <Divider />
            <div className="px-8 py-4 flex">
              <Text className="font-medium text-ui-fg-subtle w-1/2">Banner</Text>
              <Text className="w-1/2">{seller.banner}</Text>
            </div>
          </div> */}
        </Container>

      </div>
    </>
  );
};