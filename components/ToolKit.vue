<template>
  <div class="col-md-4 col-xl-3 float-md-right pr-0">
    <div class="card">
      <div class="card-header">
        Toolkit <b-link to="/tools" class="float-right"><font-awesome-icon icon="info"/></b-link>
      </div>
      <ul class="list-group list-group-flush">
        <li v-for="(tool, id) in tools" :key="id" :class="'list-group-item ' + (tool.handler ? '' : 'text-muted bg-light')">
          <b-button :id="id" class="float-right ml-5" :variant="tool.handler ? 'success' : 'secondary'"
                    :disabled="!tool.handler" @click="tool.handler"
          >Use
          </b-button>
          <strong>{{ tool.title }}</strong> <font-awesome-icon :icon="tool.icon"/><br>
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
          handler: this.onPasswordGuesser,
          icon: 'unlock'
        },
        WebScanner: {
          title: 'Web Scanner',
          description: 'Scan a public web server for vulnerabilities',
          details: 'port scan, unpatched operating system or web server',
          handler: this.onWebScanner,
          icon: 'globe'
        },
        DeviceScanner: {
          title: 'Device Scanner',
          description: 'Scan a server, printer or IoT device for vulnerabilities',
          details: 'port scan, unpatched operating system or firmware, vulnerable apps',
          handler: this.onDeviceScanner,
          icon: 'laptop-code'
        },
        WifiScanner: {
          title: 'WiFi Scanner',
          description: 'Look for visible wifi networks',
          handler: this.onWifiScanner,
          icon: 'wifi'
        },
        NetworkMapper: {
          title: 'Network Mapper',
          description: 'Scan a network to see what devices are on it',
          handler: this.onNetworkMapper,
          icon: 'network-wired'
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
