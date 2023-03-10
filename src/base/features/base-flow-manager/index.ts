import CreateFlowManager, { parseSubFlowsJSON } from 'redux-flow-manager';
import subFlowsConfig from '../../../config/flow-manager/sub.flows.config.json';
import flowsConfig from '../../../config/flow-manager/flows.config.json';
import * as flowsConditions from '../../../configurations/flows.conditions';

export default (Store: any) => CreateFlowManager(Store, 'flowManager', parseSubFlowsJSON(subFlowsConfig, flowsConditions), flowsConfig);
