import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { live_url } from "../../constants/urls";

export const useCreateExperience = () => {
  const queryClient: any = useQueryClient();
  const result = useMutation({
    mutationFn: createExperience,
    onSuccess: () => {
      queryClient.invalidateQueries["experience"];
    },
  });
  return result;
};

const createExperience = async (body: any) => {
  try {
    const res = await axios.post(`${live_url}/experience`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};
