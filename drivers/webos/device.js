'use strict';

const Homey = require('homey');

class WebOSDevice extends Homey.Device {
	
	onInit() {
		this.log('WebOSDevice has been inited');

		this.registerCapabilityListener('onoff', this.onCapabilityOnoff.bind(this));
		this.registerCapabilityListener('channel_down', this.onCapabilityChannelDown.bind(this));
		this.registerCapabilityListener('channel_up', this.onCapabilityChannelUp.bind(this));
		this.registerCapabilityListener('volume_set', this.onCapabilityVolumeSet.bind(this));
		this.registerCapabilityListener('volume_down', this.onCapabilityVolumeDown.bind(this));
		this.registerCapabilityListener('volume_mute', this.onCapabilityVolumeMute.bind(this));
		this.registerCapabilityListener('volume_up', this.onCapabilityVolumeUp.bind(this));
	}

	async onCapabilityOnoff(value, opts) {

	}	

	async onCapabilityChannelDown(value, opts) {

	}

	async onCapabilityChannelUp(value, opts) {

	}

	async onCapabilityVolumeSet(value, opts) {

	}

	async onCapabilityVolumeDown(value, opts) {

	}

	async onCapabilityVolumeMute(value, opts) {

	}

	async onCapabilityVolumeUp(value, opts) {

	}
}

module.exports = WebOSDevice;