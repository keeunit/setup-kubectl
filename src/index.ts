// google sometimes blocks hetzner ipv4 ips, so we use ipv6 first.
import { setDefaultResultOrder } from 'node:dns'
setDefaultResultOrder('ipv6first')

import {run} from './run'
import * as core from '@actions/core'

run().catch(core.setFailed)
