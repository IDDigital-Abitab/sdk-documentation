---
aside: false
outline: false
title: Get Challenge Result
---

<script setup lang="ts">
import { useRoute } from 'vitepress'
const route = useRoute()
const operationId = route.data.params.operationId
</script>

<OAOperation :operationId="operationId" />