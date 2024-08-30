import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

const FeedBack = () => {
    return (
        <div className="flex justify-center w-full">
            <Card className="md:w-1/3 mx-4">
                <form className="flex flex-col gap-4">
                    <div className="flex justify-center font-bold text-2xl">Форма обратной связи</div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Ваше имя" />
                        </div>
                        <TextInput id="name" type="email" placeholder="Мария" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone" value="Номер телефона" />
                        </div>
                        <TextInput id="phone" type="text" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Согласен на обработку персональных данных</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    );
};

export default FeedBack;
