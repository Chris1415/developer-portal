import { GetAllStatusQuery } from '@data/gql/generated/graphql';
import { getStringValue } from '@lib/utils';

export type Status = {
  id: string;
  name: string;
  identifier: string;
  description: string;
};

export type StatusResults = {
  total: string;
  results: Array<Status>;
};

export const DefaultStatus: Status = {
  id: 'pNOVO2dhtESFOSwd4Va84w',
  name: 'Available',
  identifier: 'available',
  description: '',
};

export function ParseStatus(data: GetAllStatusQuery): Array<Status> {
  if (!data.allStatus?.results) {
    return [];
  }

  return data.allStatus?.results.map((x) => {
    return {
      name: getStringValue(x?.name),
      id: getStringValue(x?.id),
      identifier: getStringValue(x?.identifier),
      description: getStringValue(x?.description),
    };
  });
}
