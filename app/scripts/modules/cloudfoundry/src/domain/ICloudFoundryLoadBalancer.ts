import { ILoadBalancer, ILoadBalancerUpsertCommand } from '@spinnaker/core';

import { ICloudFoundryOrganization, ICloudFoundrySpace } from './ICloudFoundrySpace';
import { ICloudFoundryServerGroup } from './ICloudFoundryServerGroup';

export interface ICloudFoundryDomain {
  id: string;
  name: string;
  organization: ICloudFoundryOrganization;
}

export interface ICloudFoundryLoadBalancer extends ILoadBalancer {
  id: string;
  host?: string;
  path?: string;
  port?: string;
  space: ICloudFoundrySpace;
  serverGroups: ICloudFoundryServerGroup[];
  domain?: ICloudFoundryDomain;
}

export interface ICloudFoundryLoadBalancerUpsertCommand extends ILoadBalancerUpsertCommand {
  id?: string;
  host: string;
  path?: string;
  port?: string;
  serverGroups?: ICloudFoundryServerGroup[];
  domain: string;
}
