<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <RouterLink to="/dashboard/overview" class="list-group-item list-group-item-action active">
            Tổng quan
          </RouterLink>
        </div>
      </div>
      <div class="col-md-9">
        <div class="card p-3">
          <RouterView /> </div>
      </div>
    </div>
  </div>
</template>