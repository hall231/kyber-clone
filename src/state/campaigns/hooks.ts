import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'state/index'
import { useCallback, useMemo } from 'react'
import {
  setSelectedCampaignLeaderboardLookupAddress,
  setSelectedCampaignLeaderboardPageNumber,
} from 'state/campaigns/actions'

export function useSelectedCampaignLeaderboardPageNumberManager() {
  const selectedCampaignLeaderboardPageNumber = useSelector(
    (state: AppState) => state.campaigns.selectedCampaignLeaderboardPageNumber,
  )
  const dispatch = useDispatch()

  const updateSelectedCampaignLeaderboardPageNumberCallback = useCallback(
    (newPageNumber: number) => {
      dispatch(setSelectedCampaignLeaderboardPageNumber(newPageNumber))
    },
    [dispatch],
  )

  return useMemo(
    () => [selectedCampaignLeaderboardPageNumber, updateSelectedCampaignLeaderboardPageNumberCallback] as const,
    [selectedCampaignLeaderboardPageNumber, updateSelectedCampaignLeaderboardPageNumberCallback],
  )
}

export function useSelectedCampaignLeaderboardLookupAddressManager() {
  const selectedCampaignLeaderboardLookupAddress = useSelector(
    (state: AppState) => state.campaigns.selectedCampaignLeaderboardLookupAddress,
  )
  const dispatch = useDispatch()

  const updateSelectedCampaignLeaderboardLookupAddressCallback = useCallback(
    (newLookupAddress: string) => {
      dispatch(setSelectedCampaignLeaderboardLookupAddress(newLookupAddress))
    },
    [dispatch],
  )

  return useMemo(
    () => [selectedCampaignLeaderboardLookupAddress, updateSelectedCampaignLeaderboardLookupAddressCallback] as const,
    [selectedCampaignLeaderboardLookupAddress, updateSelectedCampaignLeaderboardLookupAddressCallback],
  )
}
