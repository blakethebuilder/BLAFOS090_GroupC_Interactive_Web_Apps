// scripts.js

import { company } from './configuration.js'                // Fixed the correct syntax for importing with brackets and file structure
import { year } from './configuration.js'




const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message