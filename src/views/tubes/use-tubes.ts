import { useEffect, useState } from "react";

import {
  useGetRequiredTubesQuery,
  useLinkTubesMutation,
} from "#store/api/tubes-api";
import { useAppDispatch, useAppSelector } from "#store/hooks";
import { setFormState } from "#store/slices/form-slice";
import {
  setNotificationData,
  setNotificationVisibility,
} from "#store/slices/notification-slice";
import { selectTubesData } from "#store/slices/order-slice";
import type { TubeType } from "#store/types/tubes";

type TubeCodeType = TubeType & { codes?: string[] };

export const useTubes = () => {
  const dispatch = useAppDispatch();
  const tubeDataFromApi = useAppSelector(selectTubesData);
  const { data, error, isLoading } = useGetRequiredTubesQuery();
  const [postLinkTubes, { isLoading: linkLoading }] = useLinkTubesMutation();
  const [tubeError, setTubeError] = useState<null | string>(null);
  const [tubeData, setTubeData] = useState<TubeCodeType[]>([]);

  useEffect(() => {
    if (error) {
      dispatch(setNotificationVisibility(true));
      dispatch(
        setNotificationData({
          description: "Ошибка получения данных о необходимых контейнерах.",
          status: "error",
        }),
      );
    }
    if (data) {
      let newTubeData = data.tubes;
      if (tubeDataFromApi && tubeDataFromApi.length) {
        const tubesReducedById = tubeDataFromApi.reduce(
          (acc, curr) => ({
            ...acc,
            [curr.tube_id]: acc[curr.tube_id]
              ? [curr.code, ...acc[curr.tube_id]]
              : [curr.code],
          }),
          {} as Record<string, string[]>,
        );
        newTubeData = newTubeData.map((tube) => ({
          ...tube,
          codes: tubesReducedById[tube.tube_id] ?? [],
        }));
      }
      setTubeData(newTubeData);
    }
  }, [error, data]);

  const linkTubes = async (codes: string[]) => {
    const { data, error } = await postLinkTubes({ codes });
    if (error) {
      if ("status" in error) {
        switch (error.status) {
          case 400:
          case 422:
            setTubeError(
              "Введённый вами код недействителен. Пожалуйста, проверьте информацию ещё раз и повторите попытку.",
            );
            break;
          case 404:
            setTubeError(
              "Введённый вами код не найден. Пожалуйста, проверьте информацию ещё раз и повторите попытку.",
            );
            break;
          default:
            dispatch(setNotificationVisibility(true));
            dispatch(
              setNotificationData({
                description:
                  "Ошибка синхронизации кодов контейнеров. Попробуйте еще раз",
                status: "error",
              }),
            );
            break;
        }
      }
    }
    if (data && data.code === 200) {
      dispatch(setFormState("orderDetails"));
    }
  };

  return { error, isLoading, linkLoading, linkTubes, tubeData, tubeError };
};
