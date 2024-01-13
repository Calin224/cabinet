import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Tarife() {
    return (
        <div className="flex justify-center items-center py-12 space-y-7 flex-col min-h-[70vh] bg-[url('/tarife-image.jpeg')] bg-cover" id="tarife-bg">
            <h1 className="text-4xl font-bold text-white">Tarife</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 max-w-6xl mx-auto px-5">
                <Card className="hover:shadow-xl bg-black/[0.3] text-white">
                    <CardHeader>
                        <CardTitle>Consultatie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>250 lei / 90 min.</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-xl bg-black/[0.3] text-white">
                    <CardHeader>
                        <CardTitle>Sedinta consiliere de dezvoltare personala si vocationala</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>150 lei / 60 min.</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-xl bg-black/[0.3] text-white">
                    <CardHeader>
                        <CardTitle>Hipnoterapie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>300 lei / 90 min.</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-xl bg-black/[0.3] text-white">
                    <CardHeader>
                        <CardTitle>Diagnosticare spirituala</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>300 lei / 90 min.</p>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-xl bg-black/[0.3] text-white">
                    <CardHeader>
                        <CardTitle>Sedinte individuale de vindecare spirituala</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>300 lei / 90 min.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="">
                <h1 className="text-3xl font-bold text-center mb-12 mt-20 text-white">Pachete Terapie</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                    <Card className='bg-black/[0.3] text-white'>
                        <CardHeader>
                            <CardTitle>4 sedinte + 1 gratuita</CardTitle>
                        </CardHeader>
                    </Card>
                    <Card className='bg-black/[0.3]  text-white'>
                        <CardHeader>
                            <CardTitle>10 sedinte + 3 gratuite</CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    )
}