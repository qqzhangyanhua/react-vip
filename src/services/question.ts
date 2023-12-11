import instance, { ResDataType } from './ajax'

export const getQs = async (id: string): Promise<ResDataType> => {
  return await instance.get(`/question/${id}`)
}
