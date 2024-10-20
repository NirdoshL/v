import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShoppingBag, Download } from "lucide-react";

export default function Invoice() {
  const invoiceData = {
    invoiceNumber: "INV-2023-001",
    date: "2023-05-15",
    dueDate: "2023-05-30",
    customerName: "John Doe",
    customerEmail: "john.doe@example.com",
    customerAddress: "123 Fashion St, Style City, 12345",
    items: [
      { id: 1, name: "Classic White T-Shirt", quantity: 2, price: 29.99 },
      { id: 2, name: "Slim Fit Jeans", quantity: 1, price: 59.99 },
      { id: 3, name: "Cotton Polo Shirt", quantity: 3, price: 34.99 },
    ],
    subtotal: 224.94,
    tax: 18.0,
    shipping: 10.0,
    total: 252.94,
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <Card className="mx-auto max-w-4xl bg-white">
        <CardHeader className="border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-primary mr-2" />
              <CardTitle className="text-2xl font-bold text-primary">
                Vastra Wears
              </CardTitle>
            </div>
            <div className="text-right">
              <h2 className="text-lg font-semibold">Invoice</h2>
              <p className="text-sm text-gray-600">
                #{invoiceData.invoiceNumber}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 mb-1">
                Bill To:
              </h3>
              <p className="font-medium">{invoiceData.customerName}</p>
              <p className="text-sm text-gray-600">
                {invoiceData.customerEmail}
              </p>
              <p className="text-sm text-gray-600">
                {invoiceData.customerAddress}
              </p>
            </div>
            <div className="text-right">
              <div className="mb-2">
                <h3 className="text-sm font-semibold text-gray-600 inline-block mr-2">
                  Invoice Date:
                </h3>
                <span className="text-sm text-gray-800">
                  {invoiceData.date}
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-600 inline-block mr-2">
                  Delivery Date:
                </h3>
                <span className="text-sm text-gray-800">
                  {invoiceData.dueDate}
                </span>
              </div>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-right">Qty</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoiceData.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    ${item.price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-6 flex justify-end">
            <div className="w-64">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Subtotal:</span>
                <span>${invoiceData.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Tax:</span>
                <span>${invoiceData.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Shipping:</span>
                <span>${invoiceData.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ${invoiceData.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="text-sm text-gray-600">
              If you have any questions or need further assistance, please feel
              free to contact us at 9823035048 or vastra@gmail.com.
            </div>
            <Button className="bg-brandcolor hover:bg-brandcolor/70 ml-4">
              <Download className="mr-2 h-4 w-4" /> Download Invoice
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
