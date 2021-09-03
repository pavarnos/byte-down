<template>
  <div class="col-3 float-right">
    <div class="card">
      <div class="card-header">
        Toolkit
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(tool, id) in tools" :key="id" :class="'list-group-item ' + (tool.handler ? '' : 'text-muted bg-light')">
          <b-button :id="id" class="float-right" :variant="tool.handler ? 'success' : 'secondary'"
                    :disabled="!tool.handler" @click="tool.handler"
          >Use
          </b-button>
          <strong>{{ tool.title }}</strong><br>
          <small>{{ tool.description }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="ts">
export default {
  data: function () {
    return {
      'tools': {
        PasswordGuesser: {
          title: 'Password Guesser',
          description: 'Attempt to log in by trying lots of different passwords from a database',
          handler: this.onPasswordGuesser
        },
        WebScanner: {
          title: 'Web Scanner',
          description: 'Scan a public web server for vulnerabilities',
          details: 'port scan, unpatched operating system or web server',
          handler: this.onWebScanner
        },
        DeviceScanner: {
          title: 'Device Scanner',
          description: 'Scan a file server, printer or IoT device for vulnerabilities',
          details: 'port scan, unpatched operating system or firmware, vulnerable apps',
          handler: this.onDeviceScanner
        },
        WifiScanner: {
          title: 'WiFi Scanner',
          description: 'Look for visible wifi networks',
          handler: this.onWifiScanner
        },
        NetworkMapper: {
          title: 'Network Mapper',
          description: 'Scan a network to see what devices are on it',
          handler: this.onNetworkMapper
        }
      }
    }
  },
  props: {
    onPasswordGuesser: Function,
    onWebScanner: Function,
    onDeviceScanner: Function,
    onWifiScanner: Function,
    onNetworkMapper: Function,
  }
}
</script>
