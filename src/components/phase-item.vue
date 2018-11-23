<template>
  <li class="phase-item" :class="{ 'is-current': isCurrent }">
    <figure class="phase-item__media">
      <img class="phase-item__media-img" :src="src" :alt="alt">
      <div class="phase-item__media-txt media-txt">
        <span class="media-txt_name">{{ isCurrent ? 'Current Phase' : 'Phase' }}</span>
        <span class="media-txt_number">{{ number }}</span>
        <span class="media-txt_date">{{ ends }}</span>
      </div>
    </figure>
    <article class="phase-item__info">
      <slot />
    </article>
  </li>
</template>

<script>
export default {
  name: 'phase-item',
  props: {
    isCurrent: Boolean,
    name: String,
    number: String,
    src: String,
    alt: String,
    ends: String
  }
}
</script>
<style lang="scss">

.phase-item {
  display: flex;
  box-shadow: $shadow_wide;
  margin-bottom: $spacer-xl;
  position: relative;
  width: 100%;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  @include only-desktop {
    max-width: 23%;
    margin-right: $spacer-l;
      &:last-child {
        margin-right: 0;
      }
  }
  @include only-tablet {
    max-width: 48%;
      &:last-child {
        margin-right: 0;
      }
  }
  @include tablet-and-desktop {
    margin-bottom: $spacer-xl;
  }

  &__media {
    position: relative;
    &-txt {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
    }
  }

  &__info {
    padding: $spacer-l;
    @include only-phone {
      padding: $spacer-m;
    }
  }
}

.media-txt {
    padding: $spacer-m;
    color: $white;
    opacity: 1;

    &_name {
      font-weight: bold;
    }

    &_txt {
      @include font-size(s);
      font-weight: bold;
      display: block;
      margin: auto;
    }

    &_number {
      font-weight: bold;
      margin: 0;
      line-height: 1.3em;
      @include font-size(wow);
      display: block;
    }
  }

.is-current .media-txt {
  opacity: 1;
}

</style>
