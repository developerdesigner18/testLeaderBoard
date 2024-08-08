import React from 'react';
import data from './tableData.json';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import CountryFlagIcons from './CountryFlagIcons';

const Leaderboard = () => {
    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <div className="w-full h-full py-4 space-y-1 text-black font-bold">
                                <p className='text-2xl'>Rank</p>
                                <p className="text-md">
                                    {"Today's Change"}
                                </p>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className='w-full h-full py-4 text-black font-bold'>
                                <p className='text-2xl'>Country</p>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className='w-full h-full py-4 text-black font-bold'>
                                <p className='text-2xl'>Salawat Pledged</p>
                            </div>
                        </TableHead>
                        <TableHead>
                            <div className="w-full h-full py-4 space-y-1 text-black font-bold">
                                <p className='text-2xl'>{"Today's Pledges"}</p>
                                <p className="text-md">(Last 24 Hours)</p>
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.rank}>
                            <TableCell>{item.rank}</TableCell>
                            <TableCell>
                                <div className='flex items-center gap-4'>
                                    <div className='w-6 inline-block'>
                                        {CountryFlagIcons[item.flag]}
                                    </div>
                                    {item.country}
                                </div>
                            </TableCell>
                            <TableCell>{item.salawatPledged.toLocaleString()}</TableCell>
                            <TableCell>{item.todaysPledges}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
};

export default Leaderboard;
