<script setup>
  import { ref } from 'vue';
  defineOptions({ name: 'W3cJsProxy' })

  const user = {
    name: '张三',
    age: 12
  }
  const userProxy = new Proxy(user, {
    get(target, prop) {
      console.log('get', target, prop)
      return target[prop]
    },
    set(target, prop, value) {
      console.log('set', target, prop, value)
      target[prop] = value
    },
    deleteProperty(target, prop) {
      if (prop === "name") {
        throw new Error("姓名属性禁止删除！");
      }
      console.log(`[删除日志] 删除属性 ${prop}`);
      delete target[prop];
      return true;
    }


  })

  // 测试代理行为（与响应式无关）
userProxy.name; // 输出日志：[读取日志] 访问属性 name，值为：张三
userProxy.age = 25; // 输出日志：[修改日志] 属性 age 从 20 改为 25
userProxy.age = -5; // 抛出错误：年龄必须是正数！
delete userProxy.name; // 抛出错误：姓名属性禁止删除！
delete userProxy.age; // 输出日志：[删除日志] 删除属性 age
</script>

<template>
  <div>proxy</div>

</template>

<style scoped></style>
