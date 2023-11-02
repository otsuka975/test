<template>
  <div>
    <div>
      <b-row class="mb-3">
        <b-col>
          <h1>タグ管理</h1>
        </b-col>
        <b-col class="text-right">
          <b-button variant="primary" @click="addTag()">新規登録</b-button>
        </b-col>
      </b-row>

      <b-form-input
        v-model="filter"
        class="mb-3"
        placeholder="タグ検索"
      ></b-form-input>

      <div class="tag-container">
        <b-badge
          v-for="tag in filteredTags"
          :key="tag"
          class="mr-2 tag-badge"
          variant="light"
        >
          {{ tag }}
          <b-button
            size="sm"
            @click="deleteTag(tag)"
            variant="light"
            class="delete-button"
          >
            ×
          </b-button>
        </b-badge>
      </div>
    </div>
    <TagAddView ref="tagAddView" @add-tag="addNewTag" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TagAddView from "./TagAddView.vue";

@Component({
  components: {
    TagAddView,
  },
})
export default class TagManagement extends Vue {
  filter = "";
  tags = [
    "プログラミング",
    "システム開発",
    "プロジェクトマネジメント",
    "データサイエンス",
    "外国語",
    "オブジェクト指向",
    "プレゼンテーション",
    "経済",
    "人工知能",
    "拡張現実",
  ];

  get filteredTags() {
    return this.tags.filter((tag) => tag.includes(this.filter));
  }

  addTag() {
    (this.$refs.tagAddView as any).showModal = true;
  }

  addNewTag(tagName: string) {
    this.tags.push(tagName);
  }

  deleteTag(tag: string) {
    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.tag-container {
  display: flex;
  flex-wrap: wrap;
}

.tag-badge {
  background-color: white;
  border: 1px solid black;
  color: black;
  margin-bottom: 10px;
}

.delete-button {
  color: black;
  background-color: white;
  border: none;
}
</style>
