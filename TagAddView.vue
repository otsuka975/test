<template>
  <b-modal v-model="showModal" @hidden="resetForm" title="タグ登録" hide-footer>
    <b-form @submit.prevent="onSubmit" @reset="onReset">
      <b-form-group label="タグ名" class="mb-4">
        <template #label> タグ名 <RequiredLabel /> </template>
        <b-form-input
          v-model="form.tagName"
          placeholder="(例) システム開発"
          required
        ></b-form-input>
      </b-form-group>
      <div class="text-right">
        <b-button class="mr-3" type="reset" variant="secondary"
          >リセット</b-button
        >
        <b-button type="submit" variant="primary">登録</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import RequiredLabel from "@/components/RequiredLabel.vue";

@Component({
  components: {
    RequiredLabel,
  },
})
export default class TagAddView extends Vue {
  showModal = false;
  form = {
    tagName: "",
  };

  @Emit("add-tag")
  addTag(tagName: string) {
    return tagName;
  }

  onSubmit() {
    if (this.form.tagName) {
      this.addTag(this.form.tagName);
      this.showModal = false;
    }
  }
  onReset(event: Event) {
    event.preventDefault();
    this.form.tagName = "";
  }
}
</script>
<style scoped></style>
