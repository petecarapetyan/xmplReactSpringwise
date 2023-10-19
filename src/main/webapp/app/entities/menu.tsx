import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/student">
        <Translate contentKey="global.menu.entities.student" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/airplane">
        <Translate contentKey="global.menu.entities.airplane" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/car">
        <Translate contentKey="global.menu.entities.car" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/truck">
        <Translate contentKey="global.menu.entities.truck" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/coding-category">
        <Translate contentKey="global.menu.entities.codingCategory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/dog">
        <Translate contentKey="global.menu.entities.dog" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/frog">
        <Translate contentKey="global.menu.entities.frog" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/movie">
        <Translate contentKey="global.menu.entities.movie" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/spring-project">
        <Translate contentKey="global.menu.entities.springProject" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/user-history">
        <Translate contentKey="global.menu.entities.userHistory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/ticket">
        <Translate contentKey="global.menu.entities.ticket" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/score-type">
        <Translate contentKey="global.menu.entities.scoreType" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/score">
        <Translate contentKey="global.menu.entities.score" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
