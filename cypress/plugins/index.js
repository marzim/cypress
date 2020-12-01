/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const mqtt = require('mqtt')

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const client  = mqtt.connect("mqtt://localhost",{clientId:"scoxclient"});
  console.log("connected flag  ", client.connected);
  const options = {retain:true, qos:1};
  
  on('task', {
    // deconstruct the individual properties
    publish ({ topic, message }) {
      if (client.connected == true){
		console.log('publishing topic: %s, message: %s', topic, message)	  
		client.publish(topic, message, options);		
	  }
          else
          {
		console.log("client connected: ", client.connected);
	  }
      return null
    }

  })
}
