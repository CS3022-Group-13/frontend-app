<template>
  <v-container>
    <v-card elevation="0" class="pa-2 ma-4">
      <v-card-title class="font-weight-bold" style="font-size: 40px">
        Galle Public Grievance Management System
      </v-card-title>
      <v-card-subtitle style="font-size: 15px; letter-spacing: 1px;" class="mt-1">
        You are signed in as <span class="font-weight-bold"> {{ fullName }} ({{ userType }}) </span>
        <span v-if="userType.includes('Division')">@ <span class="font-weight-bold">{{ office }}</span> Divisional Secretariat Office</span>
      </v-card-subtitle>

      <div class="tile-plate">
        <CountTile
                v-for="t in tiles"
                :key="t.caption"
                :color="t.color"
                :caption="t.caption"
                :count="t.count"
                :loading="t.loading"
        />
      </div>
    </v-card>
  </v-container>
</template>

<script>
import CountTile from "../../components/app/CountTile";
import {api} from "../../api";

const admin_tiles = [
    {
        caption: "Registered",
        color: "orange",
        count: async (payload) => {
            const [count, status] = await api.user.getUserCount({});
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Not Verified",
        color: "red",
        count: async (payload) => {
            const [count, status] = await api.user.getUserCount({verified: 0});
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Divisions",
        color: "blue",
        count: async (payload) => {
            const [divs, status] = await api.util.getAllDivisions()
            if (status.code === 200) return divs.length;
            return "?";
        }
    },
    {
        caption: "GN Offices",
        color: "green",
        count: async (payload) => {
            const [divs, status] = await api.util.getAllGNOffices()
            if (status.code === 200) return divs.length;
            return "?";
        }
    },
    {
        caption: "Customers",
        color: "yellow",
        count: async (payload) => {
            const [count, status] = await api.customer.getCustomerCount({})
            if (status.code === 200) return count;
            return "?";
        }
    },
]

const dis_off_tiles = [
    {
        caption: "New",
        color: "yellow",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Draft'})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Approved",
        color: "blue",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Approved'})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Reviewed",
        color: "cyan",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Dis Sec Reviewed'})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Solved",
        color: "green",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Solved'})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Rejected",
        color: "red",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Rejected'})
            if (status.code === 200) return count;
            return "?";
        }
    }
]

const dis_sec_tiles = [
    {
        caption: "To Approve",
        color: "blue",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Awaiting Approval'})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "To Review",
        color: "yellow",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Awaiting Dis Sec Review'})
            if (status.code === 200) return count;
            return "?";
        }
    },
]

const div_off_tiles = [
    {
        caption: "To Accept",
        color: "blue",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Awaiting Accept', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "In Progress",
        color: "yellow",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'In Progress', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Reviewed",
        color: "cyan",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Div Sec Reviewed', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Solved",
        color: "green",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Solved', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Rejected",
        color: "red",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Rejected', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
]

const div_sec_tiles = [
    {
        caption: "In Progress",
        color: "yellow",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'In Progress', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "To Review",
        color: "cyan",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Awaiting Div Sec Review', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Solved",
        color: "green",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Solved', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
    {
        caption: "Rejected",
        color: "red",
        count: async (payload) => {
            const [count, status] = await api.complaint.getComplaintCount({status: 'Rejected', assigned_div: payload})
            if (status.code === 200) return count;
            return "?";
        }
    },
]

export default {
    name: "Dashboard",
    components: {CountTile},
    data: () => ({
        tiles: [],

    }),
    computed: {
        fullName() {
            return `${this.$store.state.user.userData.firstName} ${this.$store.state.user.userData.lastName}`
        },
        userType() {
            return this.$store.state.user.userData.role
        },
        office() {
            if (this.userType.includes("Division")) {
                return this.$store.state.user.userData.office
            } else {
                return ""
            }
        }
    },
    async created() {
        let tilePack = []
        if (this.userType === "Administrator") {
            tilePack = admin_tiles;
        } else if (this.userType === "District Officer") {
            tilePack = dis_off_tiles;
        } else if (this.userType === "District Secretariat") {
            tilePack = dis_sec_tiles;
        } else if (this.userType === "Divisional Officer") {
            tilePack = div_off_tiles;
        } else if (this.userType === "Divisional Secretariat") {
            tilePack = div_sec_tiles;
        }

        for (let i = 0; i < tilePack.length; i++) {
            const {color, caption, count} = tilePack[i]
            const tile = {
                color,
                caption,
                count: '',
                loading: true
            }
            this.tiles.push(tile)
            tile.count = await count(this.office)
            if (tile.count === '?') this.$notify("Couldn't load some data", "warning")
            tile.loading = false
        }
    }
}
</script>

<style scoped>
.tile-plate {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, 180px);
}
</style>