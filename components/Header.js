import Stack from 'react-bootstrap/Stack';

function HorizontalVerticalRulesExample() {
  return (
    <Stack direction="horizontal" gap={3}>
        <div className="left">
      <ion-icon name="menu-outline"></ion-icon>
      </div>

      <div className="right">
      <ion-icon name="person-outline"></ion-icon>
      <div className="p-2">Admin Admin</div>
      <div className="vr" />
      <ion-icon name="storefront-outline"></ion-icon>
      <div className="p-2">Int_Website</div>
      </div>
    </Stack>
  );
}

export default HorizontalVerticalRulesExample;