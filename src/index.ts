// google sometimes blocks hetzner ipv4 ips, so we use ipv6 first.
import * as httpm from '@actions/http-client';

// @ts-ignore
const original = httpm.HttpClient.prototype._getAgent;
// @ts-ignore
httpm.HttpClient.prototype._getAgent = function (url) {
  const agent = original.call(this, url);
  if (agent?.options) agent.options.family = 6;
  return agent;
};

import {run} from './run'
import * as core from '@actions/core'

run().catch(core.setFailed)
