export interface FormElement<T> {
  id: string;
  name: string;
  type: string;
  icon: string;
  editable: boolean;
  deletable: boolean;
  editMode: boolean;
  data: T;
}
