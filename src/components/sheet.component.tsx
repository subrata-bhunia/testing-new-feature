import ActionSheet, {
  ActionSheetProps,
  registerSheet,
} from 'react-native-actions-sheet';

var id = '';

interface Props extends ActionSheetProps {
  sheetId: string;
}
function Sheet(props: Props) {
  id = props.sheetId;
  console.log('after_merge_id', id);
  return (
    <ActionSheet {...props} id={props.sheetId} closeOnPressBack={true}>
      {props.children}
    </ActionSheet>
  );
}

export default Sheet;
