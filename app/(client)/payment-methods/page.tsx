import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AvailablePaymentMethods() {
  const paymentMethods = [
    {
      name: "FonPay",
      iconImage: "",
      description: "Pay securely with your FonPay",
    },
    {
      name: "E-Sewa",
      iconImage: "",
      description: "Fast and secure payments with E-Sewa",
    },
    {
      name: "Khalti",
      iconImage: "",
      description: "Fast and secure payments with Khalti",
    },
  ];

  return (
    <Card className="w-full max-w-[1600px] mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Available Payment Methods
        </CardTitle>
        <CardDescription>
          The following payment options are available on our platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paymentMethods.map((method, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 h-24 p-4 bg-secondary rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold">{method.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
