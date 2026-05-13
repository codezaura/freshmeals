"use client";

import Link from "next/link";
import Image from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import { Meal } from "@/types/meal.type";

import { useGetAllMeals } from "@/actions/meal";

import { LoadingScreen } from "@/components/loading";
import { DashboardContent } from "@/components/layout/main";

// -----------------------------------------------------------------------

export function DashboardAppView() {
  const { data, isLoading, error } = useGetAllMeals();

  if (isLoading) return <LoadingScreen />;

  const meals: Meal[] = data.meals;

  return (
    <DashboardContent>
      <Stack spacing={3}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Meals
        </Typography>

        {error ? (
          <Typography color="error.main">Unable to fetch meals.</Typography>
        ) : (
          <Grid container spacing={2.5}>
            {meals.map((meal) => (
              <Grid key={meal.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Card
                  elevation={0}
                  sx={{
                    p: 1.5,
                    borderRadius: 3,
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    height: "100%",
                  }}
                >
                  <CardMedia sx={{ borderRadius: 2, overflow: "hidden" }}>
                    <Image
                      src={meal.meal_img_url}
                      alt={meal.meal_name}
                      width={360}
                      height={220}
                      style={{ width: "100%", height: 180, objectFit: "cover" }}
                    />
                  </CardMedia>

                  <CardContent sx={{ px: 0.5, pb: 0.5 }}>
                    <Stack spacing={1.5}>
                      <Typography variant="h6" noWrap>
                        {meal.meal_name}
                      </Typography>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Avatar
                          src={meal.seller_information.seller.avatar_url}
                          alt={meal.seller_information.seller.name}
                          sx={{ width: 28, height: 28 }}
                        />
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                        >
                          {meal.seller_information.seller.name}
                        </Typography>
                      </Box>

                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        ${meal.meal_price}
                      </Typography>

                      <Button
                        LinkComponent={Link}
                        href={`/dashboard/meal/${meal.id}/order`}
                        variant="contained"
                        fullWidth
                      >
                        Order meal
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Stack>
    </DashboardContent>
  );
}
