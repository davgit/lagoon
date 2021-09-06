import { knex } from '../../util/db';

export const Sql = {
  updateDeployTargetConfig: ({ id, patch }: { id: number, patch: { [key: string]: any } }) => {
    const updatePatch = {
      ...patch,
    };

    return knex('deploy_target_config')
    .where('id', '=', id)
    .update(updatePatch)
    .toString();
  },
  selectDeployTargetConfigById: (id: number) =>
    knex('deploy_target_config')
      .where('id', '=', id)
      .toString(),
  truncateDeployTargetConfigs: () =>
    knex('deploy_target_config')
      .truncate()
      .toString(),
  insertDeployTargetConfig: ({
    id,
    project,
    weight,
    deployTarget,
    deployTargetProjectPattern,
    branches,
    pullrequests
  }: {
    id: number,
    project: number,
    weight: number,
    deployTarget: number,
    deployTargetProjectPattern: number,
    branches: number,
    pullrequests: string
  }) =>
    knex('deploy_target_config')
      .insert({
        id,
        project,
        weight,
        deployTarget,
        deployTargetProjectPattern,
        branches,
        pullrequests
      })
      .toString(),
};
