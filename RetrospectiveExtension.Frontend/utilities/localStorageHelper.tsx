import { IdentityRef } from 'azure-devops-extension-api/WebApi';

/**
 * Gets and removes the drag and drop id value from the browser's local storage
 */
const getIdValue = (andRemove: boolean = false): string => {
  const value = localStorage.getItem("reflect/dnd/id");
  if (andRemove) {
    localStorage.removeItem("reflect/dnd/id");
  }
  return value;
}

/**
 * Sets the drag and drop id value in the browser's local storage
 */
const setIdValue = (value: string) => {
  localStorage.setItem("reflect/dnd/id", value);
}

/**
 * If developing locally, save the "current user" since it's not necessary to put in the React
 *   state/props pipeline
 */
const setCurrentUser = (value: IdentityRef) => {
  localStorage.setItem("retrospective-current-user-id", value.id);
  localStorage.setItem("retrospective-current-user-display-name", value.displayName);
  localStorage.setItem("retrospective-current-user-imageUrl", value.imageUrl);
  localStorage.setItem("retrospective-current-user-inactive-status", String(value.inactive));
}

/**
 * If developing locally, save the "current user" since it's not necessary to put in the React
 *   state/props pipeline
 */
const getCurrentUser = () => {
  const currentUserIdentityRef: IdentityRef = {
    id: localStorage.getItem("retrospective-current-user-id"),
    displayName: localStorage.getItem("retrospective-current-user-display-name"),
    imageUrl: localStorage.getItem("retrospective-current-user-imageUrl"),
    inactive: Boolean(localStorage.getItem("retrospective-current-user-inactive-status")),
    isAadIdentity: true,
    isContainer: false,
    isDeletedInOrigin: false,
    profileUrl: '',
    uniqueName: '',
    _links: {
      avatar: {
        href: localStorage.getItem("retrospective-current-user-imageUrl")
      }
    },
    descriptor: '',
    url: '',
    directoryAlias: ''
  };

  return currentUserIdentityRef;
}

export default {
  getIdValue,
  setIdValue,
  getCurrentUser,
  setCurrentUser
}
