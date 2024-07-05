import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { live_url } from "../../constants/urls";

export const useCreateSkills = () => {
  const queryClient: any = useQueryClient();
  const result = useMutation({
    mutationFn: createSkills,
    onSuccess: () => {
      queryClient.invalidateQueries["skills"];
    },
  });
  return result;
};

const createSkills = async (body: any) => {
  try {
    const res = await axios.post(`${live_url}/skills`, body);
    return res;
  } catch (err) {
    console.log(err);
  }
};
