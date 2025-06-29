import { Button, Heading, Input, Label } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUpdateTopic } from "../../../../hooks/api/topic";

export const TopicEditForm = ({ topic }: { topic: any }) => {

  const { mutate: updateTopic } = useUpdateTopic();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: topic?.name || '',
      image: topic?.email || '',

    },
  });

  const onSubmit = async(data: any) => {
    await updateTopic({ id: topic.id, data })
    navigate(`/topics/${topic.id}`)
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Heading>Edit topic</Heading>
          <Label>
            Name 
            <Input {...form.register("name")} placeholder="Name" className="my-2" />
          </Label>
          <Label>
            Image 
            <Input {...form.register("image")} placeholder="Image" className="my-2" />
          </Label>

        </div>

        <div className="flex justify-end">
        <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
};