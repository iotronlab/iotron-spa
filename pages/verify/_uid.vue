<template>
  <v-container>
    <v-col cols="12" lg="10" class="mx-auto">
      <v-text-field
        v-model="uid"
        filled
        dense
        rounded
        clearable
        label="Enter UID"
        placeholder="search with uid or scan qr"
        append-outer-icon="mdi-magnify"
        @click:append-outer="searchUID"
      ></v-text-field>

      <v-simple-table v-if="uid">
        <template #default>
          <thead>
            <tr>
              <th v-if="intern" class="text-left">
                showing details for {{ intern.uid }}
              </th>
              <th v-else>
                No results found for {{ routeUID }}. Verify entered uid or scan
                qr directly.
              </th>
            </tr>
          </thead>
          <tbody v-if="intern">
            <tr>
              <td>UID</td>
              <td>{{ intern.uid }}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{{ intern.name }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ intern.email }}</td>
            </tr>
            <tr>
              <td>Start date</td>
              <td>{{ intern.start_date }}</td>
            </tr>
            <tr>
              <td>End date</td>
              <td>{{ intern.end_date }}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>{{ intern.duration }}</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>{{ intern.projects }}</td>
            </tr>
            <tr>
              <td>Technology</td>
              <td>{{ intern.technology }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      intern: null,
      uid: null,
      routeUID: this.$route.params.uid,
    }
  },
  async fetch() {
    await this.$axios
      .$get(`verify/${this.uid}`)
      .then((result) => {
        this.intern = result.data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  created() {
    this.uid = this.$route.params.uid
  },
  methods: {
    searchUID() {
      this.$router.push(this.uid)
      //   this.$fetch()
    },
  },
}
</script>
