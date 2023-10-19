import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISpringProject } from 'app/shared/model/spring-project.model';
import { getEntity, updateEntity, createEntity, reset } from './spring-project.reducer';

export const SpringProjectUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const springProjectEntity = useAppSelector(state => state.springProject.entity);
  const loading = useAppSelector(state => state.springProject.loading);
  const updating = useAppSelector(state => state.springProject.updating);
  const updateSuccess = useAppSelector(state => state.springProject.updateSuccess);

  const handleClose = () => {
    navigate('/spring-project');
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...springProjectEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...springProjectEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="xmplReactSpringwiseApp.springProject.home.createOrEditLabel" data-cy="SpringProjectCreateUpdateHeading">
            <Translate contentKey="xmplReactSpringwiseApp.springProject.home.createOrEditLabel">Create or edit a SpringProject</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="spring-project-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.springProject.title')}
                id="spring-project-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.springProject.description')}
                id="spring-project-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.springProject.imagePath')}
                id="spring-project-imagePath"
                name="imagePath"
                data-cy="imagePath"
                type="text"
              />
              <ValidatedField
                label={translate('xmplReactSpringwiseApp.springProject.url')}
                id="spring-project-url"
                name="url"
                data-cy="url"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/spring-project" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SpringProjectUpdate;
