import Input from '../../shared/formElements/Input';
import Button from '../../shared/ui/Button';

const NewPlace = (props) => {
  return (
    <form>
      <Input element='input' id='name' htmlFor='name' label='Name' />
      <Input id='description' htmlFor='description' label='Description' />
      <Button type='submit' label='Submit' />
    </form>
  );
};

export default NewPlace;
